interface Props {
  asset: `${string}.${string}`;
}

export default function Asset({ asset }: Props) {
  const [base, query] = asset.split("?");

  const inline = query === "inline";

  const ext = base.split(".").at(-1);

  if (ext === "js") {
    return <script src={`/js/${base}`} defer inline={inline}></script>;
  } else if (ext === "css") {
    return <link rel="stylesheet" href={`/css/${base}`} inline={inline} />;
  } else {
    throw new Error(`invalid asset '${asset}'`);
  }
}
