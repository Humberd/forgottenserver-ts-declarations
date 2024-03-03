declare global {
  type Cylinder = Creature | Item | Tile;

  /** @compileMembersOnly */
  enum CylinderFlags {
    FLAG_NOLIMIT, //Bypass limits like capacity/container limits, blocking items/creatures etc.
    FLAG_IGNOREBLOCKITEM, //Bypass movable blocking item checks
    FLAG_IGNOREBLOCKCREATURE , //Bypass creature checks
    FLAG_CHILDISOWNER, //Used by containers to query capacity of the carrier (player)
    FLAG_PATHFINDING, //An additional check is done for floor changing/teleport items
    FLAG_IGNOREFIELDDAMAGE, //Bypass field damage checks
    FLAG_IGNORENOTMOVEABLE, //Bypass check for mobility
    FLAG_IGNOREAUTOSTACK, //queryDestination will not try to stack items together
  }
}

export {};