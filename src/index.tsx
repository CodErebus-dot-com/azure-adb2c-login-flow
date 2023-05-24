/* eslint-disable */
import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import ErrorPage from './components/pages/ErrorPage';
import SignInPage from './components/pages/SignInPage';

export interface IAppConfig {
  props?: { [key: string]: any };
  shadowROOT?: boolean;
}

export const render = (el: HTMLElement, config: IAppConfig = {}) => {
  try {
    const { props = {}, shadowROOT } = config;
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App {...props} />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/signinsignup",
            element: <SignInPage />,
          },
        ]
      },
    ]);

    const ROOT = el;

    if (!ROOT) {
      return;
    }

    const styleTags: any = window['customElStyles'] || [];

    if (shadowROOT) {
      ROOT.attachShadow({ mode: 'open' });
      const appRoot: any = document.createElement('div');
      createRoot(appRoot).render(<RouterProvider router={router} />);
      ROOT.shadowRoot?.append(...styleTags, appRoot);
    } else {
      createRoot(ROOT).render(<RouterProvider router={router} />);
      document.head.append(...styleTags);
    }

    delete window['customElStyles'];
  } catch (error) {
    console.error('CSR render error', error);
  }
};


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './app';
// import ErrorPage from './components/pages/ErrorPage';
// import SignInPage from './components/pages/SignInPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "signinsignup",
//         element: <SignInPage />,
//       },
//     ]
//   },
// ]);

// const root = createRoot(document.getElementById('app'));
// const jsx = (
//   // <StrictMode>
//     <RouterProvider router={router} />
//   // </StrictMode>
// );
// root.render(jsx);