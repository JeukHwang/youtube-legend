import { parseId } from "./util";

export const targetId: string[] = [
  "https://www.youtube.com/watch?v=wmqsk1vZSKw",
  "https://www.youtube.com/watch?v=Lt1u6N7lueM",
  "https://www.youtube.com/watch?v=7zpxgyG7eGk",
  "https://www.youtube.com/watch?v=eEa3vDXatXg",
  "https://www.youtube.com/watch?v=0MW0mDZysxc",
  "https://www.youtube.com/watch?v=uBbwZCRIILM",
  "https://www.youtube.com/watch?v=LZgeIReY04c",
  "https://www.youtube.com/watch?v=xJVwvq5z3MI",
  "https://www.youtube.com/watch?v=H4uYwVBdd78",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=2xI5SyusvBY",
  "https://www.youtube.com/watch?v=8ZrQ8vh1hk8",
  "https://www.youtube.com/watch?v=khK_afMwAdA",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=WRLjNzTAT-M",
  "https://www.youtube.com/watch?v=5TkJttv67xU",
  "https://www.youtube.com/watch?v=3NCyD3XoJgM",
  "https://www.youtube.com/watch?v=5TkJttv67xU",
  "https://www.youtube.com/watch?v=M69Sn3OERZo",
  "https://www.youtube.com/watch?v=rdVcT09dEf8",
  "https://www.youtube.com/watch?v=8ZrQ8vh1hk8",
  "https://www.youtube.com/watch?v=I764C6_ZBCI",
  "https://www.youtube.com/watch?v=ptHLvlmypAI",
  "https://www.youtube.com/watch?v=d8CeSGlQQnM",
  "https://www.youtube.com/watch?v=DmH6YPWhaDY",
  "https://www.youtube.com/watch?v=jU0M9RP3sAc",
  "https://www.youtube.com/watch?v=zzBjVW101JM",
  "https://www.youtube.com/watch?v=QabOws88zD4",
  "https://www.youtube.com/watch?v=uBbwZCRIILM",
  "https://www.youtube.com/watch?v=NfJD9fxTBfY",
  "https://www.youtube.com/watch?v=5jKZ9KGtee0",
  "https://www.youtube.com/watch?v=LZgeIReY04c",
  "https://www.youtube.com/watch?v=DYzT-Pk6Ogw",
  "https://www.youtube.com/watch?v=gGn6ahUYkmY",
  "https://www.youtube.com/watch?v=o7zqouVuFZY",
  "https://www.youtube.com/watch?v=qT5zLyKfTyE",
  "https://www.youtube.com/watch?v=wmqsk1vZSKw",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=-qlp5x3V0xI",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=ETbOX50t0kw",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=d8CeSGlQQnM",
  "https://www.youtube.com/watch?v=M69Sn3OERZo",
  "https://www.youtube.com/watch?v=M69Sn3OERZo",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=M69Sn3OERZo",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=AXrHbrMrun0",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=seFHSuL0nsw",
  "https://www.youtube.com/watch?v=6OUDk4gMFLA",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=osxJ5-_Ccp0",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=5jKZ9KGtee0",
  "https://www.youtube.com/watch?v=022CdArz5oM",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=Li4j82QbBvk",
  "https://www.youtube.com/watch?v=BeSGOfUS-9I",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=RhMsboqMMzs",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=c1s3Iekns9k",
  "https://www.youtube.com/watch?v=od_PmtmMDV0",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=rhvF2_JkDhQ",
  "https://www.youtube.com/watch?v=8FhGOV7fs64",
  "https://www.youtube.com/watch?v=ttIJfII5SFc",
  "https://www.youtube.com/watch?v=6Cr_8tvvQ0k",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=jU0M9RP3sAc",
  "https://www.youtube.com/watch?v=tcfitI7XMYo",
  "https://www.youtube.com/watch?v=o7zqouVuFZY",
  "https://www.youtube.com/watch?v=DlLNt1lmjVY",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=EPxjI6r_EIU",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=qUbVji4XmLI",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=8ZrQ8vh1hk8",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=pr3gncRbzX4",
  "https://www.youtube.com/watch?v=SoIxUjOjOcg",
  "https://www.youtube.com/watch?v=rYydtU2G_eY",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=IV5o1E8NPMQ",
  "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=M69Sn3OERZo",
  "https://www.youtube.com/watch?v=NKi-GNsBgiQ",
  "https://www.youtube.com/watch?v=Og1TxhAxuLs",
  "https://www.youtube.com/watch?v=CAXklKrZNis",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=Og1TxhAxuLs",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=NKi-GNsBgiQ",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=DFPdtdY-a_c",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=CAXklKrZNis",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=Og1TxhAxuLs",
  "https://www.youtube.com/watch?v=NKi-GNsBgiQ",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=6OUDk4gMFLA",
  "https://www.youtube.com/watch?v=022CdArz5oM",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=-qlp5x3V0xI",
  "https://www.youtube.com/watch?v=b_Is9yjaL1E",
  "https://www.youtube.com/watch?v=pXP2sgsfEPk",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=B6AhFiOjRtM",
  "https://www.youtube.com/watch?v=uBbwZCRIILM",
  "https://www.youtube.com/watch?v=NKi-GNsBgiQ",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=CAXklKrZNis",
  "https://www.youtube.com/watch?v=QabOws88zD4",
  "https://www.youtube.com/watch?v=iE39q-IKOzA",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=uBbwZCRIILM",
  "https://www.youtube.com/watch?v=QabOws88zD4",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=o7zqouVuFZY",
  "https://www.youtube.com/watch?v=LZgeIReY04c",
  "https://www.youtube.com/watch?v=Li4j82QbBvk",
  "https://www.youtube.com/watch?v=gGn6ahUYkmY",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=XxBeM3ywcOw",
  "https://www.youtube.com/watch?v=CAXklKrZNis",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=NKi-GNsBgiQ",
  "https://www.youtube.com/watch?v=9r-rAW0gm0s",
  "https://www.youtube.com/watch?v=9r-rAW0gm0s",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=VtzvlXL9gXk",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=zrfmKu5VKxA",
  "https://www.youtube.com/watch?v=CAXklKrZNis",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=8hLQxph3cbM",
  "https://www.youtube.com/watch?v=oTiaYwLCrRg",
  "https://www.youtube.com/watch?v=AfRjTmNJaLk",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=BeSGOfUS-9I",
  "https://www.youtube.com/watch?v=DlLNt1lmjVY",
  "https://www.youtube.com/watch?v=x0CJKvevs2M",
  "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=ttIJfII5SFc",
  "https://www.youtube.com/watch?v=5jKZ9KGtee0",
  "https://www.youtube.com/watch?v=8dVQ0813KVM",
  "https://www.youtube.com/watch?v=-wdR-fBr8oo",
  "https://www.youtube.com/watch?v=x19HCw64J7s",
  "https://www.youtube.com/watch?v=9r-rAW0gm0s",
  "https://www.youtube.com/watch?v=jKhP750VdXw",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=mpp6-a3ckaM",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=ewf-8rx9_uQ",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=IV5o1E8NPMQ",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=HBxn56l9WcU",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=8FhGOV7fs64",
  "https://www.youtube.com/watch?v=s50vvwTystA",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=8ZrQ8vh1hk8",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=BeSGOfUS-9I",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=Kn10Jf1x24Q",
  "https://www.youtube.com/watch?v=QabOws88zD4",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=8d0f9G7lmzg",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=Kn10Jf1x24Q",
  "https://www.youtube.com/watch?v=z3U0udLH974",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=Rc8U8tD9gN8",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=IdyXKJ8NcNI",
  "https://www.youtube.com/watch?v=23RpZqv-wuw",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=-wdR-fBr8oo",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=-qlp5x3V0xI",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=iqONualxFH8",
  "https://www.youtube.com/watch?v=FsOAdInI5ic",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=FsOAdInI5ic",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=mpp6-a3ckaM",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=REM3sD7FatY",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=KUNwmMsFY_o",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=iqONualxFH8",
  "https://www.youtube.com/watch?v=8FhGOV7fs64",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=PrAm5YVvXx8",
  "https://www.youtube.com/watch?v=w7x_lWJNnNg",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=DFPdtdY-a_c",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=JXIMA1Vf0NA",
  "https://www.youtube.com/watch?v=pPDx0PkM904",
  "https://www.youtube.com/watch?v=aylZln2yvAA",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=8ZrQ8vh1hk8",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=ewf-8rx9_uQ",
  "https://www.youtube.com/watch?v=iqONualxFH8",
  "https://www.youtube.com/watch?v=ewf-8rx9_uQ",
  "https://www.youtube.com/watch?v=V58fBGcbaCs",
  "https://www.youtube.com/watch?v=mpp6-a3ckaM",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=REM3sD7FatY",
  "https://www.youtube.com/watch?v=23RpZqv-wuw",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=022CdArz5oM",
  "https://www.youtube.com/watch?v=AXrHbrMrun0",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=eY6D_Hl3JlQ",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=vW674z8q9l4",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=E6CcUj2mDbI",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=8FhGOV7fs64",
  "https://www.youtube.com/watch?v=0UhVwaPfhHM",
  "https://www.youtube.com/watch?v=rdVcT09dEf8",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=rdVcT09dEf8",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=khK_afMwAdA",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=9ywnLQywz74",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=H7RkiOck8u4",
  "https://www.youtube.com/watch?v=L5sNq0HpHuE",
  "https://www.youtube.com/watch?v=VKMw2it8dQY",
  "https://www.youtube.com/watch?v=uBbwZCRIILM",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=wmqsk1vZSKw",
  "https://www.youtube.com/watch?v=lUbK_m4OVdc",
  "https://www.youtube.com/watch?v=DFPdtdY-a_c",
  "https://www.youtube.com/watch?v=gtIz1u8g1F0",
  "https://www.youtube.com/watch?v=c8xJtH6UcQY",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=Hvw2cNQUuUc",
  "https://www.youtube.com/watch?v=Tp0k6VDXUOQ",
  "https://www.youtube.com/watch?v=8FhGOV7fs64",
  "https://www.youtube.com/watch?v=LGrpsZ7BsQA",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=T28LyXf8MlU",
  "https://www.youtube.com/watch?v=9BeV2lKSyXU",
  "https://www.youtube.com/watch?v=c7BVtGnlxT8",
  "https://www.youtube.com/watch?v=a7qRuUAyqCg",
  "https://www.youtube.com/watch?v=7fBpBfsMYIc",
  "https://www.youtube.com/watch?v=gtIz1u8g1F0",
].map(parseId);

export const chromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
