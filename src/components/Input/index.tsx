import Image from "next/image";
import { Container, Icon, TextInput } from "./styles";

type InputFiledProps = {
  width?: string;
  placeholder: string;
  type?: string;
  onChange: any;
  value: string;
  children?: any;
  className?: string;
};

export default function InputField({
  placeholder,
  type = "text",
  onChange,
  value = "",
  width = "auto",
  children,
  className,
}: InputFiledProps) {
  return (
    <Container width={width} className={className}>
      <TextInput
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
      <Icon>{children}</Icon>
    </Container>
  );
}
