const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/20">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} معرض أعمالي - صفحات الهبوط. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
