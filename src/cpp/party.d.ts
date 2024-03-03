declare global {
  const Party: {
    // Party(userdata)
    (this: void, player: Player): Party | null;
  };

  interface Party {
    // party:disband()
    disband(): boolean;

    // party:getLeader()
    getLeader(): Player | null;

    // party:setLeader(player)
    setLeader(player: Player): boolean;

    // party:getMembers()
    getMembers(): Player[];

    // party:getMemberCount()
    getMemberCount(): number;

    // party:getInvitees()
    getInvitees(): Player[];

    // party:getInviteeCount()
    getInviteeCount(): number;

    // party:addInvite(player)
    addInvite(player: Player): boolean;

    // party:removeInvite(player)
    removeInvite(player: Player): boolean;

    // party:addMember(player)
    addMember(player: Player): boolean;

    // party:removeMember(player)
    removeMember(player: Player): boolean;

    // party:isSharedExperienceActive()
    isSharedExperienceActive(): boolean;

    // party:isSharedExperienceEnabled()
    isSharedExperienceEnabled(): boolean;

    // party:isMemberSharingExp(player)
    isMemberSharingExp(player: Player): boolean;

    // party:shareExperience(experience)
    shareExperience(experience: number): boolean;

    // party:setSharedExperience(active)
    setSharedExperience(active: boolean): boolean;
  }
}

export {};
