interface DateProps {
  date: string;
  style?: "full" | "long" | "medium" | "short";
}

export default function formatDate({ date, style = "medium" }: DateProps) {
  const d = new Date(date);

  const f = new Intl.DateTimeFormat("en-us", {
    dateStyle: style,
  });

  return f.format(d);
}
