export const metadata = {
  title: "FocalPoint ToDo",
  description: "To Do List da FocalPoint",
  icons:{
    icon: "/images/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
