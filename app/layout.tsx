export const metadata = {
  title: "Infinite Tsukuyomi",
  description: "Reveal your dream world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
