// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='es'>
        <head>
          <title>EmoPorEmilio</title>
          <meta charset='UTF-8' />
          <meta
            name='description'
            content='¡Buenas, buenas, entusiastas de la tecnología! Soy EmoPorEmilio y transmito en línea acerca de tecnología y juegos.'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/png'
            id='activity-favicon'
            href='/favicon-on.png'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Sen:wght@100..900&display=swap'
            rel='stylesheet'
          />
          {assets}
        </head>

        <body class='font-jost subpixel-antialiased bg-bg-100'>
          <div id='app'>{children}</div>

          {scripts}
        </body>
      </html>
    )}
  />
));
