import { useState } from "react"
import { JSX } from "react/jsx-runtime"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import Button from "@/components/ui/button"
import Image from "next/image"
import MenuIcon from "public/menu-icon.svg"
import EntryIcon from "public/entry-icon.svg"
import ExitIcon from "public/logout-icon.svg"
import RegisterIcon from "public/register-icon.svg"
import PaymentIcon from "public/payment-icon.svg"

enum menu {
  entry,
  exit,
  register,
  payment
}

type Tab =
  {
    name: string
    type: menu
    icon: any
    content: JSX.Element
  }

const tabs: Tab[] = [
  {
    name: "Entrada",
    type: menu.entry,
    icon: EntryIcon,
    content:
      <form className="flex flex-col gap-5">
        <h2 className="text-[2rem]">Entrada</h2>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label text="Placa" />
              <Input type="text" placeholder="ABC-1234" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label text="Número de Passageiros" />
              <Input type="number" min={0} max={4} placeholder="0 a 4" required />
            </div>
          </div>

          <Button text="Registrar Entrada" />
        </div>

      </form>
  },
  {
    name: "Saída",
    type: menu.exit,
    icon: ExitIcon,
    content:
      <div className="w-full">
        Testando Saida
      </div>
  },
  {
    name: "Cadastros",
    type: menu.register,
    icon: RegisterIcon,
    content:
      <div className="w-full">
        Testando Cadastros
      </div>
  },
  {
    name: "Pagamentos",
    type: menu.payment,
    icon: PaymentIcon,
    content:
      <div className="w-full">
        Testando Pagamentos
      </div>
  }
]

function Home() {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [tabSelected, setTabSelected] = useState(menu.entry)

  return (
    <div className={`min-w-dvw min-h-dvh grid grid-cols-[1fr] md:grid-rows-[100px_1fr] grid-rows-[100px_70px_1fr] overflow-x-hidden`}>

      {/* Cabeçalho */}
      <div className="flex justify-between items-center p-5 bg-header-bg">
        <div className="flex flex-col">
          <span className="text-4xl text-primary">NexGen</span>
          <span className="w-70 text-[0.9rem] font-semibold">SISTEMA DE CONTROLE DE TRÁFEGO</span>
        </div>

        <button className="group w-10 h-10 relative" onClick={() => setOpenMenu(!isOpenMenu)}>
          <Image src={MenuIcon} alt="" fill className="opacity-20 group-hover:opacity-40 group-hover:cursor-pointer" />
        </button>
      </div>

      {/* Menu do cabeçalho */}
      {isOpenMenu &&
        <div className={`absolute w-90 h-90 right-0 top-[100px] bg-header-menu`}>
        </div>
      }

      {/* Menu do cabeçalho (Mobile) */}
      <div className="md:hidden flex justify-between items-center px-10 bg-header-bg z-50">
        {tabs.map((tab, index) => (
          <button key={index} className={`group w-8 h-8 relative ${tabSelected == tab.type && "border-b-2 border-b-primary"}`} onClick={() => setTabSelected(tab.type)}>
            <Image src={tab.icon} alt="" fill />
          </button>
        ))}
      </div>

      <div className="md:p-10 p-6">

        <div className="flex flex-col gap-5">

          {/* Menu tab (Desktop ou telas grandes) */}
          <div className="hidden h-10 my-5 md:flex justify-start gap-10 text-[1.4rem] border-b-2 border-b-foreground/10">
            {tabs.map((tab, index) => (
              <button key={index} className={`h-10 hover:border-b-2 hover:border-b-primary hover:cursor-pointer
               ${tabSelected == tab.type && "border-b-2 border-b-primary"}`} onClick={() => setTabSelected(tab.type)}>{tab.name}</button>
            ))}
          </div>

          {/* Conteudo */}
          <div className="md:mb-0 mb-20">
            {tabs.map(tab => (tabSelected == tab.type && tab.content))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home