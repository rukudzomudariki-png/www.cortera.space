import { NextResponse } from "next/server";

export function GET() {
  const body = `Cortera builds frontier Physical AI robotics for mining and agriculture, and the control plane that keeps cloud and physical agents safe, observable and under human oversight.
Cortera Framework is pre-release open source software available on GitHub.
CorMCP and Teralis are in development.
Key pages: https://www.cortera.space/, https://www.cortera.space/physical-ai, https://www.cortera.space/control-plane, https://www.cortera.space/industries/mining, https://www.cortera.space/industries/agriculture, https://www.cortera.space/safety, https://www.cortera.space/research, https://www.cortera.space/company, https://www.cortera.space/contact, https://www.cortera.space/announcements.
GitHub repository: https://github.com/Cortera-space/Cortera-Framework
`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
