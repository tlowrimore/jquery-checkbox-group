# Introduction #

*jQuery.checkbox-group* provides an implementation of the _check all_ pattern used
with groups of checkboxes.  This plugin functions in two modes: exclusive and
non-exclusive.  We'll explain these modes in a moment.  

By default this plugin uses non-exclusive mode.

# Usage #

  $(".checkbox-group").checkboxGroup({ 
    exclusive: true   // [true|false] (optional)
  });
  
It is important to note that there are two CSS classes that must be used
to identify the _check all_ checkbox (the master control) and the 
_check target_ checkboxes:

*.check-all* identifies the checkbox responsible for acting as the _check all_
control.

*.check-all-target* identifies the checkboxes targeted by the selection value
of the _check all_ control.

It is also important to note that all of these fields must be nested within
the element(s) identified as the _checkbox group_.

## Non-exclusive Mode ##

Non-exclusive mode simply means that the *.check-all-target* checkboxes take 
their checked state from the *.check-all* checkbox, i.e. if the *.check-all* 
checkbox is checked, then the *.check-all-target* checkboxes will also become
checked.  This implies the primary role of the *.check-all* checkbox is nothing
more than that of a master control for the group.

## Exclusive Mode ##

Exclusive mode means that the *.check-all* checkbox stands on its
own, and that its value is relevant in its own right, and represents a summary
of the remaining group values.  Put differently, the *.check-all* checkbox is 
not merely a control used to toggle the checked state of the *.check-all-target* 
checkboxes, rather its value, within the context of an application, is synonymous
with the total set of values of the *.check-all-target* checkboxes within its 
checkbox group.

An exclusive checkbox group also behaves differently than a non-exclusive group.  In
an exclusive group, if the *.check-all* checkbox becomes checked, all of the *.check-all-target*
checkboxes become unchecked (in this case, having these remain checked would be redundant.)
Conversely, if the *.check-all* checkbox is in a checked state, and one or more
of the *.check-all-target* checkboxes become checked, then the *.check-all* checkbox 
becomes unchecked.
  
# Example #

## The HTML ##

  <div class="checkbox-group">
    <label>
      <input type="checkbox" class="check-all" value="all" /> Select All Colors
    </label>
    
    <label>
      <input type="checkbox" class="check-all-target" value="red" /> Red
    </label>
    
    <label>
      <input type="checkbox" class="check-all-target" value="yellow" /> Yellow
    </label>
    
    <label>
      <input type="checkbox" class="check-all-target" value="blue" /> Blue
    </label>
  </div>
  
## The Javascript ##

  $(".checkbox-group").checkboxGroup();
  
# License #

jquery.checkbox-group is released under the [MIT License](http://www.opensource.org/licenses/MIT)
  
# Thank You! #

Thanks for taking a look at this.  I hope you find it useful!

If you find errors in the code or in this README, please feel free to let me know.