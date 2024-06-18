
type Props = {
  children?: React.ReactNode
}

export default function PageLayout(props: Props) {
  return(
    <div className="bg-primary w-full h-full text-white">
      {props.children}
    </div>
  );
}