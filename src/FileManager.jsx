import React from 'react';
import { File, Folder, Download, Trash2, UploadCloud } from 'lucide-react';

const FileManager = () => {
  const files = [
    { name: 'worlds', type: 'folder', size: '-' },
    { name: 'resource_packs', type: 'folder', size: '-' },
    { name: 'server.properties', type: 'file', size: '1.2 KB' },
    { name: 'whitelist.json', type: 'file', size: '0.5 KB' },
    { name: 'permissions.json', type: 'file', size: '0.8 KB' },
  ];

  return (
    <div className="bg-[#050505] border border-purple-900/40 rounded-3xl overflow-hidden shadow-2xl mt-6">
      <div className="bg-purple-900/10 p-4 border-b border-purple-900/30 flex justify-between items-center">
        <h3 className="text-purple-400 font-black text-sm tracking-widest uppercase italic">/ Ana Dizin</h3>
        <button className="bg-purple-600 hover:bg-purple-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-2 transition-all active:scale-95">
          <UploadCloud size={14} /> DOSYA YÜKLE
        </button>
      </div>
      
      <div className="divide-y divide-purple-900/20">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-purple-900/5 transition-colors group">
            <div className="flex items-center gap-4">
              {file.type === 'folder' ? (
                <Folder className="text-purple-500 fill-purple-500/20" size={20} />
              ) : (
                <File className="text-gray-400" size={20} />
              )}
              <div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                  {file.name}
                </span>
                <p className="text-[10px] text-gray-600 font-mono">{file.size}</p>
              </div>
            </div>
            
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-purple-900/30 rounded-lg text-purple-400 transition-all">
                <Download size={16} />
              </button>
              <button className="p-2 hover:bg-red-900/30 rounded-lg text-red-500 transition-all">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileManager;

