// Local-only throwaway design preview. No production routes or user data.
import http from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('.', import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.mp4':'video/mp4','.vtt':'text/vtt; charset=utf-8','.md':'text/plain; charset=utf-8','.json':'application/json'};
const port=Number(process.env.PROTOTYPE_PORT || 8768);
http.createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!target.startsWith(root)||pathname.includes('/.')){res.writeHead(403);res.end();return;}
    const info=await stat(target);
    if(!info.isFile())throw Error('not file');
    const body=await readFile(target);
    const headers={'Content-Type':mime[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store','X-Robots-Tag':'noindex,nofollow','Accept-Ranges':'bytes'};
    const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range||'');
    if(match){const start=Number(match[1]),end=Math.min(Number(match[2]||body.length-1),body.length-1);if(start>end){res.writeHead(416);res.end();return;}res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${body.length}`,'Content-Length':end-start+1});res.end(body.subarray(start,end+1));}
    else{res.writeHead(200,{...headers,'Content-Length':body.length});res.end(body);}
  }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Prototype file not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Prototype: http://127.0.0.1:${port}/?variant=A&page=home&lang=uk`));
