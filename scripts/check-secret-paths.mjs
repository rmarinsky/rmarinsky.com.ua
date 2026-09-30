import {execFileSync} from 'node:child_process';
const range=process.argv.includes('--range');
const paths=execFileSync('git',range?['log','--format=','--name-only','origin/main..HEAD']:['diff','--cached','--name-only','--diff-filter=ACMR'],{encoding:'utf8'}).split('\n').filter(Boolean);
const forbidden=paths.filter(path=>{
 const basename=path.split('/').at(-1);
 return (/^\.env(?:\.|$)/.test(basename)&&!/^\.env\.(example|template)$/.test(basename)) || /\.(pem|p12|pfx|key|sql|dump)$/i.test(basename) || /^(id_rsa|id_ed25519|credentials)$/i.test(basename);
});
if(forbidden.length){console.error('Credential-bearing paths are blocked:',[...new Set(forbidden)].join(', '));process.exit(1);}
