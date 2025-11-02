// components/Alert.tsx
import {
    Info,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Bell,
  } from "lucide-react";
  
  type AlertType = "info" | "warning" | "error" | "success" | "neutral";
  
  interface AlertProps {
    type?: AlertType;
    title?: string;
    children: React.ReactNode;
  }
  
  export default function Alert({ type = "info", title, children }: AlertProps) {
    const styles = {
      info: {
        icon: Info,
        base: "border-l-4 border-blue-500 bg-blue-50 text-blue-900",
        iconBg: "bg-blue-100 text-blue-600",
      },
      warning: {
        icon: AlertTriangle,
        base: "border-l-4 border-yellow-500 bg-yellow-50 text-yellow-900",
        iconBg: "bg-yellow-100 text-yellow-600",
      },
      error: {
        icon: XCircle,
        base: "border-l-4 border-red-500 bg-red-50 text-red-900",
        iconBg: "bg-red-100 text-red-600",
      },
      success: {
        icon: CheckCircle2,
        base: "border-l-4 border-green-500 bg-green-50 text-green-900",
        iconBg: "bg-green-100 text-green-600",
      },
      neutral: {
        icon: Bell,
        base: "border-l-4 border-gray-400 bg-gray-50 text-gray-900",
        iconBg: "bg-gray-100 text-gray-600",
      },
    }[type];
  
    const Icon = styles.icon;
  
    return (
      <div
        className={`relative flex items-start gap-3 p-4 sm:p-5 rounded-xl border transition hover:shadow-sm ${styles.base}`}
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg ${styles.iconBg} shrink-0`}
        >
          <Icon className="w-5 h-5" />
        </div>
  
        <div className="flex-1">
          {title && (
            <strong className="block font-semibold text-base mb-0.5">
              {title}
            </strong>
          )}
          <p className="text-sm leading-relaxed opacity-90">{children}</p>
        </div>
      </div>
    );
  }
  