
/* eslint-disable prefer-template, max-len */

export default vo => `

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="nl" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <link id="favicon" rel="shortcut icon" href="${require('../images/engagement-ring.svg')}" sizes="16x16 32x32" type="image/png" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
    ${vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : ''}
    <link href="https://fonts.googleapis.com/css?family=Raleway|Roboto|Montserrat" rel="stylesheet">

    <meta name="msapplication-TileColor" content="#ffffff">
	  <meta name="theme-color" content="#ffffff">
    
    <meta property="og:url" content="http://nielsenlois.nl"/>
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Wedding Niels & Loïs" />
		<meta property="og:description" content="17 augustus 2017 gaan Niels & Loïs trouwen! Be there!" />
		<meta name="og:image:height" content="600">
		<meta property="og:image" content="http://nielsenlois.nl/Share-image-whatsapp.png" />

		<meta name="twitter:card" content="photo" />
		<meta name="twitter:site" content="@nielsenlois" />
		<meta name="twitter:title" content="Wedding Niels & Loïs" />
		<meta name="twitter:description" content="17 augustus 2017 gaan Niels & Loïs trouwen! Be there!" />
		
		<meta name="twitter:image:width" content="1143">
		<meta name="twitter:image:height" content="600">
		<meta name="twitter:image" content="http://nielsenlois.nl/Share-image-fb.png" />
		<meta name="twitter:url" content="http://nielsenlois.nl" />
  </head>

  <body>
    <div id="root" style="height:100vh"><div>${vo.root}</div></div>
    <script src="${vo.jsBundle}"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-100417048-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>

</html>

`;
