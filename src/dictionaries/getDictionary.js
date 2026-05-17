import 'server-only'

const dictionaries = {
  de: () => import('./de.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  tr: () => import('./tr.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    return dictionaries['de']();
  }
  return dictionaries[locale]();
}
