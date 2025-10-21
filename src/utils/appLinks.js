// Utility functions for handling app links

/**
 * Detects if the user is on a mobile device
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

/**
 * Detects if the user is on iOS
 */
export const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

/**
 * Detects if the user is on Android
 */
export const isAndroid = () => {
  return /Android/.test(navigator.userAgent)
}

/**
 * Opens the appropriate app link based on the user's platform
 * @param {Object} app - The app object with affiliate links
 */
export const openAppLink = (app) => {
  if (!app) return

  let linkToOpen = app.affiliateLink

  // If the user is on Android and we have an Android-specific link, use it
  if (isAndroid() && app.affiliateLinkAndroid) {
    linkToOpen = app.affiliateLinkAndroid
  }

  // If we have a valid link, open it
  if (linkToOpen) {
    window.open(linkToOpen, '_blank', 'noopener,noreferrer')
  } else {
    console.warn('No valid affiliate link found for app:', app.name)
  }
}

/**
 * Gets the appropriate app link for the current platform
 * @param {Object} app - The app object with affiliate links
 * @returns {string|null} - The appropriate link or null if none found
 */
export const getAppLink = (app) => {
  if (!app) return null

  // If the user is on Android and we have an Android-specific link, use it
  if (isAndroid() && app.affiliateLinkAndroid) {
    return app.affiliateLinkAndroid
  }

  // Otherwise, use the default affiliate link
  return app.affiliateLink || null
}
