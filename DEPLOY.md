# Google Cloud Run Deployment Guide

## Prerequisites

1. Install [Google Cloud SDK (gcloud CLI)](https://cloud.google.com/sdk/docs/install)
2. Authenticate: `gcloud auth login`
3. Set your project: `gcloud config set project YOUR_PROJECT_ID`

## Deployment Steps

### Option 1: Deploy using gcloud CLI (Recommended)

1. **Build and deploy in one command:**
   ```bash
   gcloud run deploy open-captchaworld-narrative \
     --source . \
     --region us-west1 \
     --allow-unauthenticated \
     --port 8080
   ```

2. **Or build the Docker image first, then deploy:**
   ```bash
   # Build the image
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/open-captchaworld-narrative
   
   # Deploy to Cloud Run
   gcloud run deploy open-captchaworld-narrative \
     --image gcr.io/YOUR_PROJECT_ID/open-captchaworld-narrative \
     --region us-west1 \
     --allow-unauthenticated \
     --port 8080
   ```

### Option 2: Deploy using Cloud Build (CI/CD)

1. **Create a `cloudbuild.yaml` file** (optional, for automated builds):
   ```yaml
   steps:
     - name: 'gcr.io/cloud-builders/docker'
       args: ['build', '-t', 'gcr.io/$PROJECT_ID/open-captchaworld-narrative', '.']
     - name: 'gcr.io/cloud-builders/docker'
       args: ['push', 'gcr.io/$PROJECT_ID/open-captchaworld-narrative']
     - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
       entrypoint: gcloud
       args:
         - 'run'
         - 'deploy'
         - 'open-captchaworld-narrative'
         - '--image'
         - 'gcr.io/$PROJECT_ID/open-captchaworld-narrative'
         - '--region'
         - 'us-west1'
         - '--allow-unauthenticated'
         - '--port'
         - '8080'
   ```

2. **Trigger the build:**
   ```bash
   gcloud builds submit --config cloudbuild.yaml
   ```

## Environment Variables (if needed)

If you need to set environment variables:
```bash
gcloud run services update open-captchaworld-narrative \
  --set-env-vars GEMINI_API_KEY=your_key_here \
  --region us-west1
```

## Update Existing Deployment

To update an existing deployment:
```bash
gcloud run deploy open-captchaworld-narrative \
  --source . \
  --region us-west1
```

## View Logs

```bash
gcloud run services logs read open-captchaworld-narrative --region us-west1
```

## Get Service URL

```bash
gcloud run services describe open-captchaworld-narrative --region us-west1 --format 'value(status.url)'
```

## Notes

- The Dockerfile uses a multi-stage build for optimal image size
- The app is served using `serve` on port 8080 (Cloud Run default)
- Make sure your `vite.config.ts` has the correct build settings
- The deployment will automatically build your React app and serve the static files

