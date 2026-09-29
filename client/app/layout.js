export const metadata = {
  title: 'dhu-render',
  description: 'One-line tagline',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
