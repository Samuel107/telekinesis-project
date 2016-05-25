#### Summary Of Scripts:

These scripts are to create a black hole effect on a gameObject. It will grab all moveable objects and move it towards a object.
Once the object collides with the black hole, it will freeze that moveable object cords wherever it hit the collider.  
(I really shouldn't call this a black hole, since it doesn't destroy the game object, but it sounds cooler)

This is NOT time efficient. There are many ways to clean this up and make it run smoother. But this gives you a basic idea of how to implement a effect like constant gravity pull onto a object. I may come back to this and clean it up (which it really needs) on a later date. Maybe even add a orbit.

##### Script Layout:

BlackHole-Effect - I personally put it on a ingame GameObject button to start everything (this can be changed up to suit ones preference).

BlackHole-Collision - Put on the Black Hole GameObject. Whatever collides into this GameObject will be frozen in position and rotation.

MoveableGO-Force - Put on all moveable GameObjects.
