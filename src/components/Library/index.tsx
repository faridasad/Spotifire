
"use client"
import Image from "next/image";
import styles from "./library.module.scss";
import spotifyApi from "../../../lib/spotify";
import { signIn, useSession } from "next-auth/react";
import { Session, getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";


export default function Library(){

  const {data: session} = useSession({
    required: true,
    /* onUnauthenticated(){
      redirect('/api/auth/signin/spotify')
    } */
  }) 

  console.log(session)

  return (
    <div className={styles.library}>
      {/* <ul role="list">
        {dummyData.map((i) => {
          return (
            <li key={i.id}>
                <Image src={i.img_url} width={45} height={45} alt="" />
                <div className={styles.item}>
                    <span className={styles.name}>{i.name}</span>
                    <div className={styles.details}>
                        <span>{i.type}</span>
                        &bull;
                        <span>{i.author}</span>
                    </div>
                </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

