# BREXTON eRealty Android source

A dedicated Capacitor Android wrapper for the eRealty web platform.

## App identity
- App name: BREXTON eRealty
- Android application ID: `com.brexton.erealty`
- Public marketplace: https://public-figure.hatchable.site/erealty/
- Network operations: https://public-figure.hatchable.site/admin/erealty/

## Build the APK with GitHub Actions
1. Create a new GitHub repository named `brexton-erealty-android`.
2. Extract the contents of this ZIP into the repository root (do not upload the ZIP as a single file).
3. Commit and push the files to the `main` branch.
4. Open the repository's **Actions** tab and run **BREXTON eRealty Android APK** (or let the push trigger it).
5. Open the successful workflow run and download the `brexton-erealty-debug-apk` artifact. Extract it to get `app-debug.apk`.

## Build locally
Requires Node.js 20, Java 21, Android SDK and Android build tools.
```bash
npm install
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
cd android
./gradlew assembleDebug
```

## Navigation and authentication
The first screen offers two in-app destinations: the public marketplace and Network Operations. The destinations are opened in the Android WebView (not an intentional Chrome launch). Website authentication, roles, sessions and data remain managed by Hatchable/eRealty. Any identity-provider flow that explicitly requires an external browser still needs a verified app-return/deep-link configuration.

## Important
This ZIP is the Android source and GitHub Actions build workflow, not a prebuilt APK. The APK is produced by the GitHub Actions workflow after the source is committed to a repository.
