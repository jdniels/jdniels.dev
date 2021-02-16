export default function Analytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4RZVLLRQ7X"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4RZVLLRQ7X');
                `,
        }}
      ></script>
    </>
  );
}
