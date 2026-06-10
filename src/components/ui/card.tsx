import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ ref, className, ...props }: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg bg-card text-card-foreground", className)}
      {...props}
    />
  );
}

function CardHeader({ ref, className, ...props }: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    />
  );
}

function CardTitle({ ref, className, ...props }: React.ComponentPropsWithRef<"h3">) {
  return (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ ref, className, ...props }: React.ComponentPropsWithRef<"p">) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ ref, className, ...props }: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-pretty font-mono text-sm text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardFooter({ ref, className, ...props }: React.ComponentPropsWithRef<"div">) {
  return (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
