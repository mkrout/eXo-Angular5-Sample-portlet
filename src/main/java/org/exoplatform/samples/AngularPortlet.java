package org.exoplatform.samples;
import java.io.IOException;
import javax.portlet.GenericPortlet;
import javax.portlet.PortletRequestDispatcher;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.PortletException;
import javax.portlet.RenderMode;
public class AngularPortlet extends GenericPortlet {
	@RenderMode(name = "view")
	public void Hello(RenderRequest request, RenderResponse response) throws IOException, PortletException {
		PortletRequestDispatcher prDispatcher = getPortletContext().getRequestDispatcher("/ng/index.html");
		prDispatcher.include(request, response);
	}
}