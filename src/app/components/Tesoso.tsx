import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Image from 'next/image'

export function Tesoro() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-4 items-center cursor-pointer">
          <div className="border-4 p-3 rounded-md border-yellow-400 m-auto">
            <p
              className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-yellow-600 py-8 text-white text-2xl gap-2 sm:text-base h-10 sm:h-12 px-4 sm:px-5 font-semibold"
            >
              ABRIR TESORO
              
            </p>
            <Image
              src="https://devcloud.raza.cool/ciscom/tesoro/tesoro.png"
              alt="Next.js logo"
              width={256}
              height={256}
              className="m-auto border-6"
              />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Abrir el tesoro</DialogTitle>
          <DialogDescription>
            Ingresa las dos llaves de un tesoro para obtenerlo
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              type="number"
              placeholder="Código 1"
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
