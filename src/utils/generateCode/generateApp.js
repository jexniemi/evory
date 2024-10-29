const fs = require('fs');
const { generateApp, generatePage } = require('./templates')
const apps = require('./../../applications.json')

var args = process.argv.slice(2);
const componentName = args[0]
const pageName = args[1] // route
const displayName = args[2]
const category = args[3]
const cwd = process.cwd()

const editAppConfig = () => {
  try {
    const newApps = Object.assign({}, apps)
    newApps[category].apps.push({ route: pageName, displayName })
    const json = JSON.stringify(apps)
    fs.writeFile(`${cwd}/applications.json`, json, function (err) {
      if (err) throw err;
      console.log(`--- applications.json updated ---`);
    });
  } catch(e) {
    console.log(e)
  }
}

const copyTemplateIcon = () => {
  const iconsDir = `${cwd}/public/icons`
  fs.copyFile(`${iconsDir}/template.png`, `${iconsDir}/${pageName}.png`, (err) => {
    if (err) throw err;
    console.log(`template.png was copied to ${iconsDir}/${pageName}.png`);
});
}

const componentDir = `${cwd}/components/apps/${componentName}`
fs.mkdir(`${componentDir}`, function (err) {
  if (err) throw err;
  console.log(`Created directory ${componentDir}`);
  fs.writeFile(`${componentDir}/index.tsx`, generateApp(componentName), function (err) {
    if (err) throw err;
    console.log(`Created component ${componentDir}/index.tsx`);
  });
});

const pageDir = `${cwd}/pages/${pageName}`
fs.mkdir(`${pageDir}`, function (err) {
  if (err) throw err;
  console.log(`Created directory ${pageDir}`);
  fs.writeFile(`${pageDir}/index.tsx`, generatePage(pageName, displayName, componentName), function (err) {
    if (err) throw err;
    console.log(`Created page ${pageDir}/index.tsx`);
    editAppConfig()
    copyTemplateIcon()
  });
});

