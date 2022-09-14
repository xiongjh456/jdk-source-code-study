import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jdk-source-code-study/blog',
    component: ComponentCreator('/jdk-source-code-study/blog', '95f'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/archive',
    component: ComponentCreator('/jdk-source-code-study/blog/archive', '4b9'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/first-blog-post',
    component: ComponentCreator('/jdk-source-code-study/blog/first-blog-post', '6db'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/long-blog-post',
    component: ComponentCreator('/jdk-source-code-study/blog/long-blog-post', '113'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/mdx-blog-post',
    component: ComponentCreator('/jdk-source-code-study/blog/mdx-blog-post', '54d'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/tags',
    component: ComponentCreator('/jdk-source-code-study/blog/tags', 'f02'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/tags/docusaurus',
    component: ComponentCreator('/jdk-source-code-study/blog/tags/docusaurus', 'e8a'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/tags/facebook',
    component: ComponentCreator('/jdk-source-code-study/blog/tags/facebook', '9a2'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/tags/hello',
    component: ComponentCreator('/jdk-source-code-study/blog/tags/hello', '7a5'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/tags/hola',
    component: ComponentCreator('/jdk-source-code-study/blog/tags/hola', '8e1'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/blog/welcome',
    component: ComponentCreator('/jdk-source-code-study/blog/welcome', 'fb0'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/markdown-page',
    component: ComponentCreator('/jdk-source-code-study/markdown-page', 'e5b'),
    exact: true
  },
  {
    path: '/jdk-source-code-study/docs',
    component: ComponentCreator('/jdk-source-code-study/docs', '519'),
    routes: [
      {
        path: '/jdk-source-code-study/docs/category/tutorial---basics',
        component: ComponentCreator('/jdk-source-code-study/docs/category/tutorial---basics', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/category/tutorial---extras',
        component: ComponentCreator('/jdk-source-code-study/docs/category/tutorial---extras', 'f2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/intro',
        component: ComponentCreator('/jdk-source-code-study/docs/intro', '377'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/rt.jar/lang/Object',
        component: ComponentCreator('/jdk-source-code-study/docs/rt.jar/lang/Object', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/rt.jar/lang/String',
        component: ComponentCreator('/jdk-source-code-study/docs/rt.jar/lang/String', '885'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/congratulations', '4b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/create-a-blog-post', '1bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/create-a-document', '1ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/create-a-page', '63d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/deploy-your-site', '97a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-basics/markdown-features', '9c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-extras/manage-docs-versions', '43f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jdk-source-code-study/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/jdk-source-code-study/docs/tutorial-extras/translate-your-site', 'af0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/jdk-source-code-study/',
    component: ComponentCreator('/jdk-source-code-study/', '3f1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
