"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Check, Mail, User, Link as LinkIcon } from "lucide-react"
import { toast } from "sonner"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const TOOL_OPTIONS = [
  "Obsidian", "Napkin AI", "Mem", "Otio", "Fabric", "mymind", "Notion", 
  "Evernote", "Craft", "Me.bot", "Raindrop", "MyMemo", "logseq", "inkdrop", 
  "Traverse", "Eraser", "MuseApp", "Milanote", "Supernotes", "others"
]

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    currentTool: "",
    reason: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted data:", formData)
    toast.success("Thanks for joining our waitlist! We'll be in touch soon.", {
      duration: 5000,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Help us understand your needs better and get early access.
          </DialogDescription>
        </DialogHeader>

        {/* 🔁 REPLACED FORM CONTENT WITH EMBED */}
        <div className="mt-4">
          <iframe
            src="https://yourdomain.com/embed/abc123"
            title="Smart Signup Form"
            style={{
              width: "100%",
              height: "480px",
              border: "none",
              borderRadius: "0.75rem",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
