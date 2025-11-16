export default function Banner() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center min-h-8">
      <p>
        This website is under{" "}
        <span className="text-secondary-accent">development</span>, content & layout may change at any time.
      </p>
    </div>
  );
}
