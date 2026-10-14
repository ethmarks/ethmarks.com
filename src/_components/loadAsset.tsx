interface Props {
  asset: `${string}.${string}`;
}

export default function Asset({ asset }: Props) {
  const ext = asset.split(".").at(-1);

  if (ext === "js") {
    return <script src={`/js/${asset}`} defer></script>;
  } else if (ext === "css") {
    return <link rel="stylesheet" href={`/css/${asset}`} />;
  } else {
    throw new Error(`invalid asset '${asset}'`);
  }
}
