import { FaGear, FaUser, FaChartSimple } from "react-icons/fa6";

export interface SubItem {
  label: string;
  path: string;
}

export interface MenuConfig {
  titulo: string;
  icon?: React.ReactElement;
  children?: SubItem[];
}

export const menuItems: MenuConfig[] = [
  {
    titulo: "Cadastros",
    icon: <FaUser />,
    children: [
      { label: "Usuários", path: "/cadastros/usuarios" },
      { label: "Clientes", path: "/cadastros/clientes" },
      { label: "Participantes", path: "/cadastros/participantes" },
    ],
  },
  {
    titulo: "Relatórios",
    icon: <FaChartSimple />,
    children: [],
  },
  {
    titulo: "Emails",
    icon: <FaGear />,
  },
];