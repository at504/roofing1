import JSZip from 'jszip';
import { WP_THEME_FILES } from '../theme-files/wpThemeCode';

export async function generateWordPressThemeZip(): Promise<Blob> {
  const zip = new JSZip();
  const folderName = 'roofers-toms-river';
  const root = zip.folder(folderName);

  if (!root) {
    throw new Error('Failed to create theme directory in ZIP');
  }

  // Add all theme files
  for (const file of WP_THEME_FILES) {
    root.file(file.path, file.content);
  }

  // Create an empty assets folder structure
  root.folder('assets');
  root.folder('assets/css');
  root.folder('assets/js');
  root.folder('assets/images');

  // Add sample theme.js
  root.file('assets/js/theme.js', `
// Roofers Toms River Interactive Engine
document.addEventListener('DOMContentLoaded', function() {
  console.log('Roofers Toms River Theme initialized');
});
  `.trim());

  return await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
}

export function triggerThemeZipDownload(blob: Blob, filename = 'roofers-toms-river-theme.zip') {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
