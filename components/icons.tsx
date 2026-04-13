import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M5 5.5c0-.8.7-1.5 1.5-1.5h2.2c.7 0 1.3.5 1.5 1.2l.8 3c.1.5 0 1-.4 1.4l-1.4 1.4a15.4 15.4 0 0 0 3.8 3.8l1.4-1.4c.4-.4.9-.5 1.4-.4l3 .8c.7.2 1.2.8 1.2 1.5v2.2c0 .8-.7 1.5-1.5 1.5h-1c-7.7 0-14-6.3-14-14v-1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M7 18.5 3.5 20l1-3.7A8 8 0 1 1 20 12a8 8 0 0 1-8 8H7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2.2 131.3 2.2 253.7c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.3 224.1-221.7 0-59.3-23.1-115-67.1-157zm-157 341.6c-33.1 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68-4.3-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.5 0 101.8-82.8 184.5-184.7 184.5zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.6 21.6-3.3 3.7-6.6 4.2-12.1 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.5 13.9 10.1-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v4.7l3.1 1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 3.8 5.5 6.3v4.6c0 4 2.5 7.7 6.5 9.3 4-1.6 6.5-5.2 6.5-9.3V6.3L12 3.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M3.5 20.5V8.5l6 3v-3l6 3v-8h5v17h-17Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 20.5v-4m4 4v-4m4 4v-4" strokeLinecap="round" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M3.5 6.5h10v8h-10v-8Zm10 2h3.2l2.8 3v3h-6V8.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16.5" r="2" />
      <circle cx="17.5" cy="16.5" r="2" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 3.5c3 4 5.5 6.8 5.5 10a5.5 5.5 0 1 1-11 0c0-3.2 2.5-6 5.5-10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="m12 4 8 4.5-8 4.5-8-4.5L12 4Zm8 8.5-8 4.5-8-4.5m16 4-8 4.5-8-4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
