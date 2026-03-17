export async function notifyIndexNow(urls: string[]) {
  try {
    if (!urls || urls.length === 0) {
      console.log('[IndexNow] No URLs to submit.');
      return;
    }

    const host = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'streamversetv.com';
    const key = process.env.INDEXNOW_KEY;
    const keyLocation = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://streamversetv.com'}/${key}.txt`;

    if (!key) {
      console.warn('[IndexNow] INDEXNOW_KEY is not defined. Skipping submission.');
      return;
    }

    // Ensure all URLs are absolute
    const absoluteUrls = urls.map(url => {
        if (url.startsWith('http')) return url;
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streamversetv.com';
        return `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
    });

    console.log(`[IndexNow] Submitting ${absoluteUrls.length} URLs to Bing...`);

    const payload = {
      host,
      key,
      keyLocation,
      urlList: absoluteUrls,
    };

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`[IndexNow] Successfully submitted URLs. Status: ${response.status}`);
    } else {
      console.error(`[IndexNow] Failed to submit URLs. Status: ${response.status} ${response.statusText}`);
    }

    return response.status;
  } catch (error) {
    // A failed submission must never break the main app flow
    console.error('[IndexNow] Error submitting to IndexNow:', error);
  }
}
