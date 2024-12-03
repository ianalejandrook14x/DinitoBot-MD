import { spawn } from 'child_process'
import { join } from 'path'

const __dirname = global.__dirname(import.meta.url)

export function levelup(teks, level) {
    return new Promise(async (resolve, reject) => {
        if (!(global.support.convert || global.support.magick || global.support.gm)) return reject('Not Support!')
        const font = join(__dirname, '../src/font')
        let fontLevel = join(font, './level_c.otf')
        let fontTexts = join(font, './texts.otf')
        let xtsx = join(__dirname, '../src/lvlup_template.jpg')
        let anotations = '+1385+260' // gapake else if kadang error
        if (level > 2) anotations = '+1370+260'
        if (level > 10) anotations = '+1330+260'
        if (level > 50) anotations = '+1310+260'
        if (level > 100) anotations = '+1260+260'
