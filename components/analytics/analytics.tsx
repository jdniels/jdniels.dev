export default function Analytics() {
  return (
    <>
      <script async src={process.env.URL_ANALYTICS} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.ANALYTICS_ID}');
                `,
        }}
      />
    </>
  );
}
