/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 999, // longueur maximale très grande pour ne pas rogné
  tabWidth: 2, // largeur d'une tabulation
  useTabs: false, // utiliser des espaces au lieu de tab
  semi: true, // mettre des ; à la fin des lignes
  singleQuote: true, // utiliser des quotes simples
  trailingComma: 'all', // virgules finales
  bracketSpacing: true, // espace dans les objets { a: 1 }
  arrowParens: 'always', // parenthèses toujours dans les flèches
  proseWrap: 'never', // pas de wrapping automatique dans le Markdown
};
