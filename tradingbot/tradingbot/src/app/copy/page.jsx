"use client"

import { useState } from "react"
import { CloudLightningIcon as Lightning, HelpCircle, ChevronDown, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CopyTrade() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [sellMethod, setSellMethod] = useState("auto")

  return (
    (<Card className="w-full rounded-lg max-w-xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>CopyTrade</CardTitle>
        <div className="flex items-center gap-2 text-muted-foreground">
          {/* <span>Tutorial</span> */}
          {/* <ChevronDown className="h-4 w-4" /> */}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Lightning Mode Header */}
        <div className="flex items-center gap-2">
          <span
            className="bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-400 bg-clip-text text-transparent font-medium">
            Lightning mode, rapid on-chain
          </span>
                      {/* // <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}

          <Lightning className="h-5 w-5 text-orange-400" />
        </div>

        {/* Copy From */}
        <div className="space-y-2">
          <Label>Copy From</Label>
          <Input placeholder="Wallet Address" className="bg-muted/50" />
        </div>

        {/* Trading Parameters */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              Max Buy 
                          {/* // <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}

            </Label>
            <Input placeholder="Amount" className="bg-muted/50" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              Fixed Buy
                          {/* // <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}

            </Label>
            <Input placeholder="Amount" className="bg-muted/50" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              Fixed Ratio
                          {/* // <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}

            </Label>
            <Input placeholder="Ratio" className="bg-muted/50" />
          </div>
        </div>

        {/* Amount Input */}
        {/* <div className="space-y-2">
          <Input placeholder="Amount" className="bg-muted/50" suffix="SOL" />
          <div className="text-sm text-muted-foreground">≈$0(0SOL)</div>
        </div> */}

        {/* Sell Method */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            Sell Method
                    {/* // <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}
 
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={sellMethod === "auto" ? "default" : "outline"}
              onClick={() => setSellMethod("auto")}
              className="w-full">
              Auto Sells
            </Button>
            <Button
              variant={sellMethod === "manual" ? "default" : "outline"}
              onClick={() => setSellMethod("manual")}
              className="w-full">
              Not Sells
            </Button>
          </div>
          {/* <Button variant="outline" className="w-full">
            Customize TP & SL
          </Button> */}
        </div>

        {/* Advanced Settings */}
        {/* <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>
            <span className="flex items-center gap-2">
              Advanced Settings
              <span className="bg-muted rounded px-1.5 text-sm">1</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Open</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isAdvancedOpen ? "rotate-180" : ""}`} />
            </div>
          </Button>
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <RotateCcw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </div> */}
        

        {/* Bottom Controls */}
        <div className="space-y-4 pt-60">
          <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Lightning className="h-4 w-4" />
                Auto
              </span>
              <span>0.002</span>
              {/* <span>OFF</span> */}
            </div>
            {/* <ChevronDown className="h-4 w-4" /> */}
          </div>

          <Button className="w-full" variant="secondary">
            Confirm
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Note: Ensure your account has enough balance for copy trading to run smoothly.
          </p>
        </div>
      </CardContent>
    </Card>)
  );
}

