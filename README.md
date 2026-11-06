# Portfolio

 My web page with information of my professional and personal experience

Commands to run:
npm run dev

Install:
npm init @vitejs/app

npm install three

# Deploy

mkdir public\imgs\Docs
copy imgs\*.glb public\imgs
copy "imgs\Docs\CV-Luis Carvalho.pdf" public\imgs\Docs
npm run build
dir dist\imgs
npm run preview (to preview)
npx gh-pages -d dist
