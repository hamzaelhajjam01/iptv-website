# Script to remove corrupted repeated text fragments from MDX files

$postsPath = "c:\Users\hp\Downloads\streamverse-iptv\content\posts"
$corruptionPatterns = @(
    'zon Firestick[^.]*?\.',
    'zing their[^.]*?\.',
    'zes sports[^.]*?\.',
    'ze Technology[^.]*?\.',
    'ze "[^"]*"[^.]*?\.'
)

Get-ChildItem -Path "$postsPath\*.mdx" | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    
    # Find where the legitimate content ends (usually after proper closing like "**[Help Page](/help)**.")
    # Look for repeated fragments that start with partial words
    $modified = $false
    
    foreach ($pattern in $corruptionPatterns) {
        # Find all matches
        if ($content -match $pattern) {
            # Get position of first occurrence
            if ($content -match "(\*\*\.|\]\*\*\.|\*\*\]\.)[\s\n]+(zon |zing |zes |ze Technology|ze `")") {
                # Split at the corruption point
                $splitPos = $Matches.Index + $Matches[1].Length
                $cleanContent = $content.Substring(0, $splitPos).TrimEnd()
                
                if ($cleanContent.Length -lt $content.Length) {
                    Set-Content -Path $filePath -Value $cleanContent -NoNewline
                    Write-Host "Fixed: $($_.Name) (removed $($content.Length - $cleanContent.Length) characters)"
                    $modified = $true
                    break
                }
            }
        }
    }
    
    if (-not $modified) {
        # Alternative: just remove everything after the last proper sentence ending followed by corruption
        if ($content -match '(\*\*\.|help\)\*\*\.)[\s\n]+zon ') {
            $splitPos = $Matches.Index + $Matches[1].Length
            $cleanContent = $content.Substring(0, $splitPos).TrimEnd()
            Set-Content -Path $filePath -Value $cleanContent -NoNewline
            Write-Host "Fixed (alt method): $($_.Name)"
        }
    }
}

Write-Host "`nDone!"
