export {}

declare global {
  interface Window {
    beforeInstallPromptEvent: BeforeInstallPromptEvent
    // TODO
    FSBL: any
    ga: any
  }

  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[]
    readonly userChoice: Promise<{
      outcome: "accepted" | "dismissed"
      platform: string
    }>
    prompt(): Promise<void>
  }
}