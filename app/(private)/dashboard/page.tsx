import { redirect } from "next/navigation";
import { Settings } from "./_components/settings";
// import { getTeamForUser, getUser } from '@/lib/db/queries';

export default async function SettingsPage() {
  //   const user = await getUser();

  //   if (!user) {
  //     redirect('/sign-in');
  //   }

  //   const teamData = await getTeamForUser(user.id);

  //   if (!teamData) {
  //     throw new Error('Team not found');
  //   }

  return <Settings teamData={{ name: "lol" }} />;
}
