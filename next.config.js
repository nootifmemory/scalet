module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
  images: {
    domains: ['source.unsplash.com'],
  },
  poweredByHeader: false,
  generateBuildId: async () => {
    const d = new Date();
    return d.toLocaleDateString().replace(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/g,"")
  },
  distDir: 'build'
}
