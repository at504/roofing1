import React, { useState } from 'react';
import { Download, FileCode, Copy, Check, Folder, FileText, ExternalLink, Terminal, Globe, Layers, Server } from 'lucide-react';
import { WP_THEME_FILES, WPThemeFile } from '../theme-files/wpThemeCode';
import { generateWordPressThemeZip, triggerThemeZipDownload } from '../utils/zipGenerator';
import { generateStaticHtmlZip } from '../utils/staticHtmlGenerator';

export const ThemeCodeViewer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<WPThemeFile>(WP_THEME_FILES[0]);
  const [copied, setCopied] = useState(false);
  const [isZippingWP, setIsZippingWP] = useState(false);
  const [isZippingHTML, setIsZippingHTML] = useState(false);
  const [zipSuccessMsg, setZipSuccessMsg] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadWPZip = async () => {
    try {
      setIsZippingWP(true);
      const blob = await generateWordPressThemeZip();
      triggerThemeZipDownload(blob, 'roofers-toms-river-theme.zip');
      setZipSuccessMsg('WordPress Theme ZIP (roofers-toms-river-theme.zip) downloaded successfully! Upload via WP Admin → Appearance → Themes.');
      setTimeout(() => setZipSuccessMsg(null), 6000);
    } catch (err) {
      console.error('Failed to generate WP ZIP:', err);
    } finally {
      setIsZippingWP(false);
    }
  };

  const handleDownloadHTMLZip = async () => {
    try {
      setIsZippingHTML(true);
      const blob = await generateStaticHtmlZip();
      triggerThemeZipDownload(blob, 'roofers-toms-river-static-website.zip');
      setZipSuccessMsg('Static HTML Package (roofers-toms-river-static-website.zip) downloaded! Extract and upload directly to public_html or drag-and-drop to Netlify/Vercel.');
      setTimeout(() => setZipSuccessMsg(null), 6000);
    } catch (err) {
      console.error('Failed to generate Static HTML ZIP:', err);
    } finally {
      setIsZippingHTML(false);
    }
  };

  return (
    <div className="py-12 bg-slate-900 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Download Action */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Export Center · Static HTML & WordPress</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Export Complete Website
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Download as <strong>100% Pure Static HTML</strong> (for cPanel, Apache, Nginx, Netlify, Vercel) OR as a <strong>Full WordPress Theme</strong>. Both formats include complete Schema.org SEO, responsive layouts, and Ocean County targeting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Download Static HTML Button */}
            <button
              onClick={handleDownloadHTMLZip}
              disabled={isZippingHTML}
              className="px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
            >
              <Globe className="w-5 h-5 text-slate-950" />
              <span>{isZippingHTML ? 'Building HTML ZIP...' : 'Download Static HTML (.ZIP)'}</span>
            </button>

            {/* Download WP Theme Button */}
            <button
              onClick={handleDownloadWPZip}
              disabled={isZippingWP}
              className="px-6 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              <span>{isZippingWP ? 'Generating WP ZIP...' : 'Download WP Theme (.ZIP)'}</span>
            </button>
          </div>
        </div>

        {zipSuccessMsg && (
          <div className="mb-6 p-4 bg-emerald-950/90 border border-emerald-700 text-emerald-200 rounded-2xl flex items-center gap-3 text-sm shadow-xl">
            <Check className="w-6 h-6 text-emerald-400 shrink-0" />
            <span>{zipSuccessMsg}</span>
          </div>
        )}

        {/* Comparison & Instructions Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-slate-950 rounded-2xl border border-emerald-900/50 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <Globe className="w-5 h-5" />
              <span>Option 1: Static HTML</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Pure HTML5 + Tailwind CSS. Upload to cPanel <code className="text-amber-400">public_html</code>, Apache, Nginx, or Netlify.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div>✓ Includes <code>index.html</code>, <code>services.html</code></div>
              <div>✓ 100/100 Google PageSpeed</div>
              <div>✓ Built-in Schema.org JSON-LD</div>
            </div>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-sky-900/50 shadow-lg">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-2">
              <Terminal className="w-5 h-5" />
              <span>Option 2: GitHub Pages (Direct)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Configured with <code className="text-amber-400">.github/workflows/deploy.yml</code>. Push directly to GitHub repo!
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div>✓ Auto-builds with GitHub Actions</div>
              <div>✓ Free global CDN hosting on github.io</div>
              <div>✓ Settings → Pages → Source: GitHub Actions</div>
            </div>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-amber-900/50 shadow-lg">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
              <Server className="w-5 h-5" />
              <span>Option 3: WordPress Theme</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Valid PHP 8.0+ theme files. Upload in WordPress Admin → Appearance → Themes → Upload Theme.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div>✓ Complete Rank & Rent Silo structure</div>
              <div>✓ Custom Post Types for Services & Towns</div>
              <div>✓ Ready to activate in 1 click</div>
            </div>
          </div>
        </div>

        {/* Two Column Layout: File Explorer Left | Code Viewer Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* File Explorer (Col 4) */}
          <div className="lg:col-span-4 bg-slate-950 rounded-2xl border border-slate-800 p-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Folder className="w-4 h-4 text-amber-400" />
                <span>Source Files Explorer</span>
              </div>
              <span className="text-[11px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded font-mono">
                {WP_THEME_FILES.length} Files
              </span>
            </div>

            <div className="space-y-1">
              {WP_THEME_FILES.map((file) => (
                <button
                  key={file.path}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                    selectedFile.path === file.path
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileText className={`w-3.5 h-3.5 shrink-0 ${
                      selectedFile.path === file.path ? 'text-slate-950' : 'text-slate-500'
                    }`} />
                    <span className="truncate">{file.path}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-sans ${
                    selectedFile.path === file.path ? 'text-slate-900 font-extrabold' : 'text-slate-500'
                  }`}>
                    {file.path.split('.').pop()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Code Viewer (Col 8) */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-white">{selectedFile.path}</span>
                  <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {selectedFile.path.endsWith('.php') ? 'PHP 8.0+' : selectedFile.path.endsWith('.css') ? 'CSS3' : 'Standard'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{selectedFile.description}</p>
              </div>

              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content Block */}
            <div className="p-4 overflow-x-auto max-h-[650px] font-mono text-xs text-slate-300 leading-relaxed bg-slate-950">
              <pre className="whitespace-pre">
                <code>{selectedFile.content}</code>
              </pre>
            </div>

            {/* Footer Stats of Selected File */}
            <div className="px-5 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Lines: {selectedFile.content.split('\n').length}</span>
              <span>Characters: {selectedFile.content.length.toLocaleString()}</span>
              <span>Encoding: UTF-8</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

