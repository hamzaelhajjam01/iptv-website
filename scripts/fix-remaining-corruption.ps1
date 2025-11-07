# Final comprehensive corruption cleanup script

$postsPath = "c:\Users\hp\Downloads\streamverse-iptv\content\posts"
$targetFiles = @(
    'how-to-install-and-configure-the-tivimate-iptv-player.mdx',
    'iptv-vs-cable-tv-in-2025-a-full-cost-and-feature-comparison.mdx',
    'streamversetv-vs-your-top-competitor-an-honest-comparison.mdx',
    'the-5-best-vpns-for-iptv-streaming-in-2025.mdx'
)

foreach ($fileName in $targetFiles) {
    $filePath = Join-Path $postsPath $fileName
    $content = Get-Content $filePath -Raw
    
    # Find the last valid sentence ending followed by corruption
    # Patterns: "**.", "]**.", ")**.", "?", "!", etc. followed by corrupted text
    $patterns = @(
        '(\*\*\.|]\*\*\.|]\)\*\*\.|minutes\.|technician\.|drilling\.|servers\.|reliability\.)[\s\n]+([zZ]on |[zZ]ing |[zZ]es |[zZ]e )',
        '(\*\*\.|Firestick\.)[\s\n]+([zZ]on |[zZ]ing |[zZ]es |[zZ]e )'
    )
    
    $cleaned = $false
    foreach ($pattern in $patterns) {
        if ($content -match $pattern) {
            $splitPos = $Matches.Index + $Matches[1].Length
            $cleanContent = $content.Substring(0, $splitPos).TrimEnd()
            Set-Content -Path $filePath -Value $cleanContent -NoNewline
            Write-Host "✓ Fixed: $fileName"
            $cleaned = $true
            break
        }
    }
    
    if (-not $cleaned) {
        Write-Host "⚠ Needs manual review: $fileName"
    }
}

Write-Host "Done!"
