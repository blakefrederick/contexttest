import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const pagesDirectory = path.join(process.cwd(), 'pages')
  const appDirectory = path.join(process.cwd(), 'app')

  const appDirectories = fs
    .readdirSync(appDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  const pages = fs
    .readdirSync(pagesDirectory)
    .filter((file) => {
      const filename = path.parse(file).name
      return filename !== '_app' && !file.startsWith('/api') && filename !== 'api'
    })
    .concat(appDirectories.map((dir) => `${dir}`))

  res.status(200).json({ pages })
}
