export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db9b0e2ebd8f3cc41b52a32',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-mn3jvymh',
                  apiId: '8421f68c-7e13-41b9-b4c8-805d8c3c39ee'
                },
                {
                  buildHookId: '5db9b0e2703af695939c6a2d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-mz4a9zvr',
                  apiId: 'a1237f34-2491-43d6-92f4-f28909c6afd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/terenas911/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-mz4a9zvr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
