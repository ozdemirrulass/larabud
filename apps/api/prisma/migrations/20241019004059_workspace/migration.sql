-- CreateTable
CREATE TABLE "workspaces" (
    "id" TEXT NOT NULL,

    CONSTRAINT "workspaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserWorkspaces" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserWorkspaces_AB_unique" ON "_UserWorkspaces"("A", "B");

-- CreateIndex
CREATE INDEX "_UserWorkspaces_B_index" ON "_UserWorkspaces"("B");

-- AddForeignKey
ALTER TABLE "_UserWorkspaces" ADD CONSTRAINT "_UserWorkspaces_A_fkey" FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkspaces" ADD CONSTRAINT "_UserWorkspaces_B_fkey" FOREIGN KEY ("B") REFERENCES "workspaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
