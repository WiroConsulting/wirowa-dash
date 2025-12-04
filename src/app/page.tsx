import DashboardShell from "@/components/layout/dashboard-shell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const username = "username"; // später API

  return (
    <DashboardShell>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Willkommen bei Wirowa, {username}!</h1>
        <p className="text-neutral-600 text-sm">Schön dich wiederzusehen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <Card>
          <CardHeader>
            <CardTitle>Setup Fortschritt</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600">0 / 12 Schritte abgeschlossen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Letzte Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600">Noch keine Guides gelesen.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600">
              Kontaktiere uns jederzeit.
            </p>
          </CardContent>
        </Card>

      </div>
    </DashboardShell>
  );
}
